import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create({
                userId: ID.unique, 
                email, 
                password, 
                name
            });
            if(userAccount) {
                console.log("account created successfully");
                console.log(userAccount)
                // call another method\
                return this.login({email, password});
            }else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        } 
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailPasswordSession({
                email, 
                password
            });
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser :: error", error);
        }
        return null;
    }
    
    async logout() {
        try {
            return await this.account.deleteSession(); 
        } catch (error) {
            console.log(error)
        }
    }

}

const authService = new AuthService() // object creation

export default authService; // here we exporting this object taki koi bhi iske method ko access kar sake dot se

