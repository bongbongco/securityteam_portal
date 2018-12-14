import { Resolvers } from "../../../types/resolvers";
import cleanNullArgs from "../../../utils/cleanNullArg";
import {
    AddServerInfoMutationArgs,
    AddServerInfoResponse
} from "../../../types/graph";
import Server from "../../../entities/Server";

const resolvers: Resolvers = {
    Mutation: {
        AddServerInfo: async(
            _,
            args: AddServerInfoMutationArgs
        ): Promise<AddServerInfoResponse> => {
            const notNull: any = cleanNullArgs(args);
            const { ip } = notNull;
            try { 
                const existingServer = await Server.findOne({ ip });
                if (existingServer) {
                    return {
                        ok: false,
                        error: "Existing server",
                    }; 
                } else {
                    await Server.create({...notNull}).save();

                    return {
                        ok: true,
                        error: null
                    }
                }
            } catch (error) {
                return {
                    ok: false,
                    error: error.message
                };
            }
        }
    }
};

export default resolvers;