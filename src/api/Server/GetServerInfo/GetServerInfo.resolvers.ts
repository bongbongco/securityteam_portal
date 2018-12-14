import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
    Query: {
        GetServerInfo: privateResolver(async(
            _,
            __,
            { req }
        ) => {
            return {
                ok: true,
                error: null,
                server: null
            };
        })
    }
};

export default resolvers;