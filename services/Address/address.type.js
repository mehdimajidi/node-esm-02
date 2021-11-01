import { gql } from "apollo-server-express";

const AddressType = gql`
  type Address {
    _id: ID
     address: String
     member: Member
     status: Int
  }

  input AddressInput {
    memberId:ID!
    address: String!
    status: Int!
  }

  extend type Query {
    addresses: [Address]
    address(id: ID!): Address
  }

  extend type Mutation {
    addAddress(input: AddressInput!): Address
    updateAddress(id: ID!, input: AddressInput!): Address
    deleteAddress(id: ID): Address
  }
`;

export default AddressType;
