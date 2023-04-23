import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            User Interface (UI): The UI is the front-end component that users
            interact with. It includes all the elements of the app that users
            can see and interact with, such as buttons, menus, forms, product
            images, and descriptions. Product catalog: The product catalog is
            the database of all the products that the ecommerce app offers for
            sale. It includes information about each product, such as its name,
            description, price, and availability. Shopping cart: The shopping
            cart is a temporary storage area where users can place items they
            want to purchase. It allows users to review their purchases before
            checking out and provides them with a total cost for their order.
            Payment gateway: The payment gateway is the component that handles
            online payments. It processes credit card transactions and securely
            transfers funds from the customer to the merchant. Order management:
            The order management component tracks the status of each order, from
            the time it is placed to the time it is delivered. It may include
            features such as order tracking, shipping notifications, and
            delivery confirmations. Customer service: The customer service
            component provides users with assistance when they have questions or
            issues. It may include features such as a chatbot, email support, or
            a knowledge base.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
