const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item">
        <div class="row">
            <div class="col-2 d-flex justify-content-center align-items-center ">
                <img src=${who.avatarIcon} class="wd-follow-icon-format ${who.class}" />
            </div>
            <div class="col-7">
                <div class="fw-bold">
                        ${who.userName}
                    <i class="fa fa-circle"></i>
                </div>
                <div>@${who.handle}</div>
            </div>
            <div class="col-3 d-flex justify-content-center align-items-center">
                <button class="btn btn-primary rounded-pill pt-2 pb-2 me-2">Follow</button>
            </div>
        </div>
    </div>
    `)
}
export default WhoToFollowListItem;