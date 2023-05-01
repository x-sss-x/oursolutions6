import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const customer = await prisma.customer.create({
    data: {
      customer_name: "Amulya",
      customer_email: 'amulya098@gmail.com',
      phone_number: 9123456787,
      address: 'KR puram,Karnataka',
      password: 'amulyasa098',
      age: 19,
    },
  });

  const serviceProvider = await prisma.serviceprovider.create({
    data: {
      serviceprovider_name: 'Arlo',
      serviceprovider_email: 'alro123@gmail.com',
      phone_number: 8765432198,
      gstregistration_number: 'GST878765',
      chargers_for_particular_service: 890,
      specialisation: 'Deliverying food',
      service_name: 'Food delivery',
      age: 29,
      address: 'Bngalore',
      password: 'evaovan1234',
    },
  });

  const service = await prisma.service.create({
    data: {
      service_name: 'Food delivery',
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
      review_content: 'Very tasty food !',
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