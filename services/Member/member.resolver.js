import { AddressModel } from "../Address/address.model";
import { MemberModel } from "./member.model";

const memberResolver = {
  Query: {
    members: async () => {
      return await MemberModel.find({});
    },
    member: async (root, args) => {
      return await MemberModel.findById(args.id);
    },
  },
  Mutation: {
    addMember: async (root, args) => {
      try {
        return await MemberModel.create(args.input);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    updateMember: async (root, args) => {
      try {
        return await MemberModel.findByIdAndUpdate(args.id, args.input, {
          new: true,
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
    deleteMember: async (root, args) => {
      try {
        return await MemberModel.findByIdAndUpdate(
          args.id,
          { status: -1 },
          {
            new: true,
          }
        );
      } catch (e) {
        throw new Error(e.message);
      }
    },
  },
  Member: {
    addresses: async (root) => {
      console.log(root)
      return AddressModel.find({memberId:root._id})
    },
  },
};

export default memberResolver;
