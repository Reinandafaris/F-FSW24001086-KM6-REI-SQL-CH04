const notifications = document.querySelector(".notifications"),
  buttons = document.getElementById("btn-notip"),
  form = document.getElementById("form-add-car"),
  unorderedList = document.getElementById("unordered-list"),
  notifList = document.getElementById("notif-list");

const poastDetails = {
  timer: 5000,
};

const removePoast = (poast) => {
  poast.classList.add("hide");
  if (poast.timeoutId) clearTimeout(poast.timeoutId);
  setTimeout(() => poast.remove(), 500);
};

const createPoast = (id) => {
  const poast = document.createElement("li");
  poast.className = `poast ${id}`;
  poast.innerHTML = `
  <div class="column">
                <i class="fa-solid fa-circle-check"></i>
                <span>Success: This is a success toast.</span>
              </div>
              <i class="fa-solid fa-xmark" onclick="removePoast(this.parentElement)"></i>
  `;
  notifications.appendChild(poast);
  poast.timeoutId = setTimeout(
    () => removePoast(poast),
    poastDetails.timer
  );
};

if (unorderedList) {
  notifList.timeoutId = setTimeout(
    () => removePoast(notifList),
    poastDetails.timer
  );
}

/*
setTimeout(() => {
  unorderedList.remove();
}, 5000);

if (unorderedList) {
  setTimeout(() => {
    unorderedList.remove();
  }, 1000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setTimeout(() => createPoast("success"), 1000);
});

buttons.addEventListener("click", () => {
  setTimeout(() => createPoast("success"), 1000);
});
*/
