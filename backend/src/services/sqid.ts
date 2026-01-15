import Sqids from "sqids";

const sqid = new Sqids({
    minLength: 4,
})

export function getSqid(){
    return sqid;
}
