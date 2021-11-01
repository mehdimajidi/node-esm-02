import { MemberModel } from "../Member/member.model";
import { AddressModel } from "./address.model";

const addressResolver = {
  Query: {
    addresses: async () => {
      return await AddressModel.find({});
    },
    address: async (root, args) => {
      return await AddressModel.findById(args.id);
    },
  },
  Mutation: {
    addAddress: async (root, args) => {
      try {
        return await AddressModel.create(args.input);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    updateAddress: async (root, args) => {
      try {
        return await AddressModel.findByIdAndUpdate(args.id, args.input, {
          new: true,
        });
      } catch (e) {
        throw new Error(e.message);
      }
    },
    deleteAddress: async (root, args) => {
      try {
        return await AddressModel.findByIdAndUpdate(
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
  Address: {
    member: async (root) => {
      return await MemberModel.findById(root.memberId)
    },
  },
};

export default addressResolver;
