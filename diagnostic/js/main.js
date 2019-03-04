window.addEventListener("load", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(($delete) => {
        let $notification = $delete.parentNode;

        $delete.addEventListener("click", () => {
            $notification.style.display = "none";
        });
    });
});
