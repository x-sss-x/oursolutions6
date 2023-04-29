import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const customer = await prisma.customer.create({
    data: {
      customer_name: "varshitha",
      customer_email: 'varshitha@gmail.com',
      phone_number: 9876543219,
      address: 'Mysore',
      password: 'varshichinni*',
      age: 23,
    },
  });

  const serviceProvider = await prisma.serviceprovider.create({
    data: {
      serviceprovider_name: 'Eva ovan',
      serviceprovider_email: 'evaovan@gmail.com',
      phone_number: 9876543278,
      gstregistration_number: 'GST87654',
      chargers_for_particular_service: 900,
      specialisation: 'Cleaning',
      service_name: 'HomeCleaning',
      age: 35,
      address: 'Mysore',
      password: 'evaovan1234',
    },
  });

  const service = await prisma.service.create({
    data: {
      service_name: 'Home Cleaning',
      serviceprovider_id: serviceProvider.serviceprovider_id,
    },
  });

  const history = await prisma.history.create({
    data: {
      date: new Date(),
      customer_id: customer.customer_id,
      serviceprovider_id: serviceProvider.serviceprovider_id,
      service_id: service.service_id,
    },
  });

  const review = await prisma.review.create({
    data: {
      customer_id: customer.customer_id,
      service_id: service.service_id,
      rating: 4.5,
      review_content: 'Great Home cleaning service!',
    },
  });

  const request = await prisma.request.create({
    data: {
      reasons_for_rejecting: "service not available on that date",
      date: new Date(),
      time: new Date(),
      serviceprovider_id: serviceProvider.serviceprovider_id,
      customer_id: customer.customer_id,
      service_id: service.service_id,
    },
  });

  console.log('One record seeded for each model!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });