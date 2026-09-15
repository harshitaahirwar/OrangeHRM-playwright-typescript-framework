import dotenv from 'dotenv'
dotenv.config();

export class EnvConfig{

private static getEnvVariable(name:string):string{
    const value=process.env[name];

    if(!value){
        throw new Error('environment variable `${name}` is not defined')
    }
    return value;

}


static get username():string{
    return this.getEnvVariable('ORANGE_USERNAME')

}


static get password():string{

    return this.getEnvVariable('ORANGE_PASSWORD')
}






}