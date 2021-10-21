import { gql } from "apollo-server-express";

const PhoneType = gql`
  type Phone {
    _id: ID
    phoneType: Int
    phone: String
    member: Member
    status: Int
  }
`;

export default PhoneType;
