create table "public"."Customer" (
    "customer_id" text not null,
    "customer_email" text not null,
    "password" text not null,
    "age" integer not null,
    "address" text not null,
    "phone_number" bigint not null, 
    "profile_picture" text not null,
    "customer_name" text not null
);


create table "public"."Serviceprovider" (
    "serviceprovider_id" text not null,
    "serviceprovider_email" text not null,
    "password" text not null,
    "age" integer not null,
    "address" text not null,
    "phone_number" bigint not null,
    "profile_picture" text not null,
    "gstregistration_number" text not null,
    "chargers_for_particular_service" integer not null,
    "specialisation" text not null,
    "serviceprovider_name" text not null,
    "service_name" text not null
);


create table "public"."history" (
    "date" timestamp(3) without time zone not null,
    "customer_id" text not null,
    "serviceprovider_id" text not null,
    "service_id" text not null
);


create table "public"."request" (
    "booking_id" text not null,
    "reasons_for_rejecting" text not null,
    "date" timestamp(3) without time zone not null,
    "time" timestamp(3) without time zone not null,
    "serviceprovider_id" text not null,
    "customer_id" text not null,
    "service_id" text not null
);


create table "public"."review" (
    "customer_id" text not null,
    "review_id" text not null,
    "service_id" text not null,
    "rating" double precision not null,
    "review_content" text not null
);


create table "public"."service" (
    "service_name" text not null,
    "service_id" text not null,
    "serviceprovider_id" text not null
);


CREATE UNIQUE INDEX "Customer_pkey" ON public."Customer" USING btree (customer_id);

CREATE UNIQUE INDEX "Serviceprovider_pkey" ON public."Serviceprovider" USING btree (serviceprovider_id);

CREATE UNIQUE INDEX history_service_id_key ON public.history USING btree (service_id);

CREATE UNIQUE INDEX request_pkey ON public.request USING btree (booking_id);

CREATE UNIQUE INDEX review_pkey ON public.review USING btree (review_id);

CREATE UNIQUE INDEX service_pkey ON public.service USING btree (service_id);

alter table "public"."Customer" add constraint "Customer_pkey" PRIMARY KEY using index "Customer_pkey";

alter table "public"."Serviceprovider" add constraint "Serviceprovider_pkey" PRIMARY KEY using index "Serviceprovider_pkey";

alter table "public"."request" add constraint "request_pkey" PRIMARY KEY using index "request_pkey";

alter table "public"."review" add constraint "review_pkey" PRIMARY KEY using index "review_pkey";

alter table "public"."service" add constraint "service_pkey" PRIMARY KEY using index "service_pkey";

alter table "public"."history" add constraint "history_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES "Customer"(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."history" validate constraint "history_customer_id_fkey";

alter table "public"."history" add constraint "history_service_id_fkey" FOREIGN KEY (service_id) REFERENCES service(service_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."history" validate constraint "history_service_id_fkey";

alter table "public"."history" add constraint "history_serviceprovider_id_fkey" FOREIGN KEY (serviceprovider_id) REFERENCES "Serviceprovider"(serviceprovider_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."history" validate constraint "history_serviceprovider_id_fkey";

alter table "public"."request" add constraint "request_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES "Customer"(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."request" validate constraint "request_customer_id_fkey";

alter table "public"."request" add constraint "request_service_id_fkey" FOREIGN KEY (service_id) REFERENCES service(service_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."request" validate constraint "request_service_id_fkey";

alter table "public"."request" add constraint "request_serviceprovider_id_fkey" FOREIGN KEY (serviceprovider_id) REFERENCES "Serviceprovider"(serviceprovider_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."request" validate constraint "request_serviceprovider_id_fkey";

alter table "public"."review" add constraint "review_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES "Customer"(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review" validate constraint "review_customer_id_fkey";

alter table "public"."review" add constraint "review_service_id_fkey" FOREIGN KEY (service_id) REFERENCES service(service_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."review" validate constraint "review_service_id_fkey";

alter table "public"."service" add constraint "service_serviceprovider_id_fkey" FOREIGN KEY (serviceprovider_id) REFERENCES "Serviceprovider"(serviceprovider_id) ON UPDATE CASCADE ON DELETE RESTRICT not valid;

alter table "public"."service" validate constraint "service_serviceprovider_id_fkey";


