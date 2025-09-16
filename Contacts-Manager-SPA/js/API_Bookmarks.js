const API_URL_Bookmarks = "http://localhost:5000/api/bookmarks";
function API_GetBookmarks() {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL_Bookmarks,
            success: bookmark => { resolve(bookmark); },
            error: (xhr) => { console.log(xhr); resolve(null); }
        });
    });
}
function API_GetBookmark(bookmarkId) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL_Bookmarks + "/" + bookmarkId,
            success: bookmark => { resolve(bookmark); },
            error: () => { resolve(null); }
        });
    });
}
function API_SaveBookmark(bookmark, create) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL_Bookmarks + (create ? "" : "/" + bookmark.Id),
            type: create ? "POST" : "PUT",
            contentType: 'application/json',
            data: JSON.stringify(bookmark),
            success: (/*data*/) => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}
function API_DeleteBookmark(id) {
    return new Promise(resolve => {
        $.ajax({
            url: API_URL_Bookmarks + "/" + id,
            type: "DELETE",
            success: () => { resolve(true); },
            error: (/*xhr*/) => { resolve(false /*xhr.status*/); }
        });
    });
}

function API_GetCategories() {
    return new Promise(resolve => {
        $.ajax({
            url:API_URL_Bookmarks + "/Categories",
            success: bookmark => { resolve(bookmark); },
            error: () => { resolve(null); }        })
    })
}