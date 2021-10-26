import { gql } from "apollo-server-express";

const MemberType = gql`
  type Member {
    _id: ID
    firstname: String
    lastname: String
    birthdate: String
  }

  input MemberInput {
    firstname: String
    lastname: String
    birthdate: String
  }

  extend type Query {
    members: [Member]
    member(id: ID!): Member
  }

  extend type Mutation {
    addMember(input: MemberInput!): Member
    updateMember(id: ID!, input: MemberInput!): Member
    deleteMember(id: ID): Member
  }
`;

export default MemberType;
