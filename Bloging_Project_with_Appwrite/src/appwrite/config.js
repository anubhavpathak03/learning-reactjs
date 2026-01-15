import conf from '../conf/conf.js'
import { Client, ID, Storage, Query, Databases } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwriteDatabaseId,
                collectionId: conf.appwriteCollectionId,
                documentId: slug,
                data: {
                    title,
                    slug,
                    featuredImage,
                    status,
                    userId,
                    content
                },
            })
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }
} 


const service = new Service();
export default service;