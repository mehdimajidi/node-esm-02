import { gql } from "apollo-server-express";

const MemberType = gql`
  type Member {
    _id: ID
    firstname: String
    lastname: String
    birthdate: String
  }
`;

export default MemberType;
