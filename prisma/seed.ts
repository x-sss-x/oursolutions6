import { Prisma, PrismaClient } from "@prisma/client"

const client = new PrismaClient();

const getCustomer = (): Prisma.CustomerCreateInput[] => [
    {
        customer_email:"varshitha@gmail.com",
        password:"varshi",
        age:23,
        address:"Housing board,Hassan,Karnataka",
        phone_number:9876543217,
        customer_name:"Varshithadas",
        

    },
    {
        customer_email:"thejas@gmail.com",
        password:"thejas",
        age:21,
        address:"BangaloreKarnataka",
        phone_number:9217876543,
        customer_name:"Thejasdas",
        

    },
    {
        customer_email:"nasir89@gmail.com",
        password:"nasir",
        age:19,
        address:"Mangalore,Karnataka",
        phone_number:8765432198,
        customer_name:"Nasir",
        

    },
    {
        customer_email:"amulya87@gmail.com",
        password:"amulya",
        age:28,
        address:"Hassan,Karnataka",
        phone_number:9182736459,
        customer_name:"Amulya",
        

    },
    {
        customer_email:"vinod65@gmail.com",
        password:"vinod",
        age:26,
        address:"CRP,Karnataka",
        phone_number:9876543218,
        customer_name:"vinod",


    },
    const getServiceProvider = (): Prisma.ServiceproviderCreateInput[] => [
        {
            serviceprovider_email:"varshitha@gmail.com",
            password:"varshi",
            age:23,
            address:"Housing board,Hassan,Karnataka",
            phone_number:9876543217,
            serviceprovider_name:"Varshithadas",
            
    
        },








]
   const main =()=>{
    return Promise.all(getCustomer().map((CustomerInput)=>client.customer.create({
        data:CustomerInput
    })))
   }
   main().then(()=>{
    console.log("Successfully Seeded")
   }).catch((e)=>{
    console.log(e);
   })