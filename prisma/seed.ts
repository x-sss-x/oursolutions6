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
        service_name: "Bike ride",
        serviceprovider_name: "Arlo",
        gstregistration_number: "vsghha8",
        chargers_for_particular_service: 8765,
        serviceprovider_email: "arlojd5n@gmail.com",
        age: 98,
        password: "arlojd5n",
        address: "Bangalore",
        phone_number: 9876543212,
        specialisation: "HR"
    },

{
        service_name: "Taxi ride",
        serviceprovider_name: "Eva Olsen",
        gstregistration_number: "jhgs46528",
        chargers_for_particular_service: 765,
        serviceprovider_email: "evaolsen12@gmail.com",
        age: 98,
        password: "abcedftyu",
        address: "Mysuru",
        phone_number: 8176549876,
        specialisation: "HR"
    },
    {
        service_name: "Bike ride",
        serviceprovider_name: "joy",
        gstregistration_number: "vsghha8",
        chargers_for_particular_service: 8765,
        serviceprovider_email: "vahahajj@gmail.com",
        age: 32,
        password: "agahajaj",
        address: "Bangalore",
        phone_number: 9876543212,
        specialisation: "HR"
    },
    {
        service_name: "Home cleaning",
        serviceprovider_name: "Camilla",
        gstregistration_number: "kjha25gds",
        chargers_for_particular_service: 8765,
        serviceprovider_email: "camilla@gmail.com",
        age: 29,
        password: "agahajaj",
        address: "Mumbai",
        phone_number: 8745346786,
        specialisation: "HR"
    },
    {
        service_name: "courier service",
        serviceprovider_name: "jose",
        gstregistration_number: "jhdayyi8",
        chargers_for_particular_service: 985,
        serviceprovider_email: "jose7@gmail.com",
        age: 22,
        password: "Jose1234",
        address: "Bangalore",
        phone_number: 8765432189,
        specialisation: "HR"
    },



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
