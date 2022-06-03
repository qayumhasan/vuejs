import axios from "../../http/axios"

export default {
    SET_OWNER_BIDS(state, bids) {
        state.ownerBids = bids;
    },
    SET_OWNER_BIDS_COUNTS(state, bidscount) {

        state.number_of_bids = bidscount;
    },
    SET_OWNER_USERS(state, user) {

        state.user = user;
    },
}

