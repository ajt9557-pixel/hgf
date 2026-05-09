// 💖 Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// 💬 Chat system
function showMessage() {
    const chat = document.getElementById("chat");
    const choices = document.getElementById("choices");

    chat.classList.remove("hidden");
    chat.innerHTML = "";

    // ✨ Typing text effect
    function typeMessage(text, className = "me", speed = 35, callback) {
        const msg = document.createElement("div");
        msg.classList.add("bubble", className);
        chat.appendChild(msg);

        let i = 0;

        function typingEffect() {
            if (i < text.length) {
                msg.innerHTML += text.charAt(i);
                i++;
                chat.scrollTop = chat.scrollHeight;
                setTimeout(typingEffect, speed);
            } else {
                if (callback) callback();
            }
        }

        typingEffect();
    }

    // ⌨️ Fake typing bubble
    function typing(callback) {
        const t = document.createElement("div");
        t.classList.add("bubble", "typing");
        t.innerText = "Typing...";
        chat.appendChild(t);

        chat.scrollTop = chat.scrollHeight;

        setTimeout(() => {
            t.remove();
            callback();
        }, 1500);
    }

    // 💖 Conversation flow
    typing(() => {
        typeMessage("Hey...", "me", 50, () => {

            setTimeout(() => {
                typing(() => {

                    typeMessage("I’ve been wanting to tell you something", "me", 40, () => {

                        setTimeout(() => {
                            typing(() => {

                                typeMessage("I like you a lot 💖", "me", 40, () => {

                                    setTimeout(() => {
                                        typing(() => {

                                            typeMessage(`hallo aiki i know that u are aware na i like u but i just want to say it out loud even we dont talk too much and i know there is someone there for you well ata u like someone na but i understand that or maybe wla d ko lang sure well thank you na tinitiis mo yun kakulitan ko sa pag send ng reels and thank you for accepting ng feelings for you heheheheh do youn like mee???`,
                                                "me",
                                                20,
                                                () => {
                                                    choices.classList.remove("hidden");
                                                }
                                            );

                                        });
                                    }, 1000);

                                });

                            });
                        }, 1000);

                    });

                });
            }, 800);

        });
    });
}

// 😂 Moving NO button
const noBtn = document.getElementById("noBtn");

document.addEventListener("mouseover", function(e) {
    if (e.target === noBtn) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;

        noBtn.style.position = "relative";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }
});

// Responses
function yes() {
    document.getElementById("response").innerText =
        "You just made me the happiest person alive 💖🥺";
}

function no() {
    document.getElementById("response").innerText =
        "You caught me 😭 but I still like you!";
}