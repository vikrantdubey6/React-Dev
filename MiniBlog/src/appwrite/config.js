import conf from "../conf.js";
import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    databases
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteprojectid);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {

        try {
            return await this.databases.createDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                })
        } catch (error) {
            console.log("appwrite service :: createpost :: error", error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("aapwrite service :: updatePost :: error", error)
        }
    }
 
    async deletePost(slug){
        try {
            await this.databases.deleteDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
            return true 
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
        return false
    }

    async getAllPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
               queries,
            )
            
        } catch (error) {
            console.log("Appwrite services :: getAllPosts :: error", error)
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("appwrite service:: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service