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
        serviceprovider_email: "Sanua@gmail.com",
        password: "Sonu",
        age: 23,
        address: "Hassan,Karnataka",
        phone_number: 9876543217,
        gstregistration_number: "bshs8",
        specialisation: "Bike ride",
        chargers_for_particular_service: 987,



    },{
        serviceprovider_email: "Ayra@gmail.com",
        password: "Ayra",
        age: 21,
        address: "Hassan,Karnataka",
        phone_number: 9876549017,
        gstregistration_number: "bs788",
        specialisation: "Taxi ride",
        chargers_for_particular_service: 187,



    },
    {
        serviceprovider_email: "Harshi@gmail.com",
        password: "Harshi",
        age: 21,
        address: "Bangalore,Karnataka",
        phone_number: 9876548765,
        gstregistration_number: "kjhf67",
        specialisation: "Home cleaning ",
        chargers_for_particular_service: 9876,



    },
    {
        serviceprovider_email: "hema@gmail.com",
        password: "hema",
        age: 22,
        address: "Mysore,Karnataka",
        phone_number: 8796549017,
        gstregistration_number: "jhgfds56",
        specialisation: "Home cleaning",
        chargers_for_particular_service: 1087,



    },



    
]
const getservice=(): Prisma.serviceCreateInput[] => [
    service_name:"varshi",
    s



]








const main = async () => {
    const Customer = await client.customer.createMany({
        data: getCustomer()
    })
    const Serviceprovider = await client.serviceprovider.createMany({
        data: getServiceprovider()
    })


};


main().then(() => {
    console.log("Successfully Seeded")
}).catch((e) => {
    console.log(e);
})
