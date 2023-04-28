import { Prisma, PrismaClient } from "@prisma/client"

const client = new PrismaClient();

const getCustomer = (): Prisma.CustomerCreateInput[] => [
    {
        customer_email: "varshitha@gmail.com",
        password: "varshi",
        age: 23,
        address: "Housing board,Hassan,Karnataka",
        phone_number: 9876543217,
        customer_name: "Varshithadas",


    },
    {
        customer_email: "thejas@gmail.com",
        password: "thejas",
        age: 21,
        address: "BangaloreKarnataka",
        phone_number: 9217876543,
        customer_name: "Thejasdas",


    },
    {
        customer_email: "nasir89@gmail.com",
        password: "nasir",
        age: 19,
        address: "Mangalore,Karnataka",
        phone_number: 8765432198,
        customer_name: "Nasir",


    },
    {
        customer_email: "amulya87@gmail.com",
        password: "amulya",
        age: 28,
        address: "Hassan,Karnataka",
        phone_number: 9182736459,
        customer_name: "Amulya",


    },
    {
        customer_email: "vinod65@gmail.com",
        password: "vinod",
        age: 26,
        address: "CRP,Karnataka",
        phone_number: 9876543218,
        customer_name: "vinod",


    },]

    const getServiceprovider = (): Prisma.ServiceproviderCreateInput[] => [
        {
            serviceprovider_email: "santhosh@gmail.com",
            password: "santhosh",
            age: 20,
            address: "BangaloreKarnataka",
            phone_number: 9876543217,
           gstregistration_number:"vhf56j",
           chargers_for_particular_service:8765,
           specialisation:"Bike ridd",
           service_id:"santhosh_98",
          

    
    
        },
        {
            serviceprovider_email:"sagar@gmail.com",
            password: "sagar",
            age: 21,
            address: "KR puram,Karnataka",
            phone_number: 9876543217,
           gstregistration_number:"vhf56j",
           chargers_for_particular_service:8765,
           specialisation:"Taxi ride",
           service_id:"sagar_88",
           

    
    
        },
    ]


















const main = () => {
    return Promise.all(getCustomer().map((CustomerInput) => client.customer.create({
        data: CustomerInput
    })))
}
const serviceprovider = () => {
    return Promise.all(getServiceprovider().map((ServiceproviderInput) => client.serviceprovider.create({
        data: ServiceproviderInput
    })))
}

main().then(() => {
    console.log("Successfully Seeded")
}).catch((e) => {
    console.log(e);
})