const wordPairs = [{
        index: '0',
        english: "appropriate",
        ukrainian: "відповідний, доречний",
        polish: "odpowiedni"
    },
    {
        index: '1',
        english: "It’s appropriate to wear a suit when you go to the office",
        ukrainian: "В офіс доречно вдягати костюм",
        polish: "W biurze odpowiednio jest nosić garnitur"
    },
    {
        index: '2',
        english: "avoid",
        ukrainian: "уникати",
        polish: "unikać"
    },
    {
        index: '3',
        english: "Avoid the broken bottle on the floor.",
        ukrainian: "Уникай розбитої пляшки на підлозі.",
        polish: "Unikaj rozbitej butelki na podłodze."
    },
    {
        index: '4',
        english: "behave",
        ukrainian: "поводитися",
        polish: "zachowywać się"
    },
    {
        index: '5',
        english: "She always behaves well when her father is around.",
        ukrainian: "Вона завжди добре поводиться, коли поруч її батько.",
        polish: "Ona zawsze dobrze się zachowuje, kiedy jest w pobliżu jej ojciec."
    },
    {
        index: '6',
        english: "calm",
        ukrainian: "спокійний",
        polish: "spokojny"
    },
    {
        index: '7',
        english: "A nice warm bath makes me feel so calm.",
        ukrainian: "Тепла ванна змушує мене почуватися таким спокійним.",
        polish: "Przyjemna ciepła kąpiel sprawia, że czuję się tak spokojny."
    },
    {
        index: '8',
        english: "concern",
        ukrainian: "занепокоєння",
        polish: "niepokój"
    },
    {
        index: '9',
        english: "I was filled with concern after reading the newspaper.",
        ukrainian: "Я був охоплений занепокоєнням після прочитання газети.",
        polish: "Byłem przepełniony niepokojem po przeczytaniu gazety."
    },
    {
        index: '10',
        english: "content",
        ukrainian: "задоволений",
        polish: "zadowolony"
    },
    {
        index: '11',
        english: "The baby looked very content sitting on the floor.",
        ukrainian: "Малюк виглядав дуже задоволеним, сидячи на підлозі.",
        polish: "Dziecko wyglądało na bardzo zadowolone siedząc na podłodze."
    },
    {
        index: '12',
        english: "expect",
        ukrainian: "очікувати",
        polish: "oczekiwać"
    },
    {
        index: '13',
        english: "I expect the bus to be here very soon.",
        ukrainian: "Я очікую, що автобус скоро буде тут.",
        polish: "Oczekuję, że autobus wkrótce tu będzie."
    },
    {
        index: '14',
        english: "frequently",
        ukrainian: "часто",
        polish: "często"
    },
    {
        index: '15',
        english: "We meet frequently, either at the beginning or ending of the week.",
        ukrainian: "Ми зустрічаємося часто, або на початку, або наприкінці тижня.",
        polish: "Spotykamy się często, albo na początku, albo na końcu tygodnia."
    },
    {
        index: '16',
        english: "habit",
        ukrainian: "звичка",
        polish: "nawyk"
    },
    {
        index: '17',
        english: "Smoking is a bad habit that can kill you.",
        ukrainian: "Куріння – це погана звичка, яка може вбити вас.",
        polish: "Palenie to zły nawyk, który może cię zabić."
    },
    {
        index: '18',
        english: "instruct",
        ukrainian: "інструктувати",
        polish: "instruować"
    },
    {
        index: '19',
        english: "My teacher instructs us in several subjects.",
        ukrainian: "Мій вчитель навчає нас кількох предметів.",
        polish: "Mój nauczyciel uczy nas kilku przedmiotów."
    },
    {
        index: '20',
        english: "issue",
        ukrainian: "питання",
        polish: "kwestia"
    },
    {
        index: '21',
        english: "The men spoke about issues that were important to the people.",
        ukrainian: "Чоловіки говорили про питання, які були важливими для людей.",
        polish: "Mężczyźni rozmawiali o kwestiach, które były ważne dla ludzi."
    },
    {
        index: '22',
        english: "none",
        ukrainian: "жоден",
        polish: "żaden"
    },
    {
        index: '23',
        english: "He spent all his money. There is none left.",
        ukrainian: "Він витратив усі свої гроші. Жодного не залишилось.",
        polish: "Wydał wszystkie swoje pieniądze. Nic nie zostało."
    },
    {
        index: '24',
        english: "patient",
        ukrainian: "терплячий",
        polish: "cierpliwy"
    },
    {
        index: '25',
        english: "I had to be patient and wait until 5 o’clock to leave.",
        ukrainian: "Мені довелося бути терплячим і чекати до 5 години, щоб піти.",
        polish: "Musiałem być cierpliwy i czekać do 5, aby wyjść."
    },
    {
        index: '26',
        english: "positive",
        ukrainian: "позитивний",
        polish: "pozytywny"
    },
    {
        index: '27',
        english: "She has a positive future ahead of her after finishing college.",
        ukrainian: "У неї попереду позитивне майбутнє після закінчення коледжу.",
        polish: "Ma przed sobą pozytywną przyszłość po ukończeniu studiów."
    },
    {
        index: '28',
        english: "punish",
        ukrainian: "покарати",
        polish: "ukarać"
    },
    {
        index: '29',
        english: "To punish me, my teacher had me stand in the corner.",
        ukrainian: "Щоб покарати мене, вчитель змусив мене стояти в кутку.",
        polish: "Aby mnie ukarać, nauczyciel kazał mi stać w kącie."
    },
    {
        index: '30',
        english: "represent",
        ukrainian: "представляти",
        polish: "reprezentować"
    },
    {
        index: '31',
        english: "My lawyer will represent me in court.",
        ukrainian: "Мій адвокат представлятиме мене в суді.",
        polish: "Mój prawnik będzie mnie reprezentował w sądzie."
    },
    {
        index: '32',
        english: "shake",
        ukrainian: "трясти",
        polish: "trząść"
    },
    {
        index: '33',
        english: "When people shake hands, it usually means they agree.",
        ukrainian: "Коли люди потискають руки, це зазвичай означає, що вони погоджуються.",
        polish: "Kiedy ludzie się witają, zazwyczaj oznacza to, że się zgadzają."
    },
    {
        index: '34',
        english: "spread",
        ukrainian: "поширювати",
        polish: "rozsmarować"
    },
    {
        index: '35',
        english: "I like to spread butter on my toast.",
        ukrainian: "Мені подобається намазувати масло на тост.",
        polish: "Lubię smarować masło na toście."
    },
    {
        index: '36',
        english: "stroll",
        ukrainian: "прогулюватися",
        polish: "spacerować"
    },
    {
        index: '37',
        english: "My dog and I strolled through the park today.",
        ukrainian: "Сьогодні ми з собакою гуляли парком.",
        polish: "Dziś spacerowaliśmy z psem po parku."
    },
    {
        index: '38',
        english: "village",
        ukrainian: "село",
        polish: "wieś"
    },
    {
        index: '39',
        english: "There are only a few houses in my village.",
        ukrainian: "У моєму селі лише кілька будинків.",
        polish: "W mojej wsi jest tylko kilka domów."
    }
];

const l = 'ukrainian';

let currentPairIndex = 0;
let currentAudio = null;

let lang = "uk-UA";
switch (l) {
    case 'ukrainian':
        lang = "uk-UA";
        break;
    case 'espanol':
        lang = "es-ES";
        break;
    case 'hindi':
        lang = "hi-IN";
        break;
    case 'arabic':
        lang = "ar-SA";
        break;
    case 'portuguese':
        lang = "pt-PT";
        break;
    case 'bengali':
        lang = "bn-BD";
        break;
    case 'yapanese':
        lang = "ja-JP";
        break;
    case 'francais':
        lang = "fr-FR";
        break;
    case 'deutsch':
        lang = "de-DE";
        break;
    case 'idonesia':
        lang = "id-ID";
        break;
    case 'turkish':
        lang = "tr-TR";
        break;

}

function speakEnglish(hiddenUkr = false) {

    const englishWord = wordPairs[currentPairIndex].index;
    playAudio(`english/${englishWord}.mp3`);
    setTextColor('english');
}

let voices = [];

function loadVoices() {
    return new Promise((resolve) => {
        const synth = window.speechSynthesis;
        let id;

        id = setInterval(() => {
            voices = synth.getVoices();
            if (voices.length !== 0) {
                resolve(voices);
                clearInterval(id);
            }
        }, 10);
    });
}

window.onload = async () => {
    voices = await loadVoices();
};

function speakUkrainian() {
    debugger
    return new Promise((resolve, reject) => {
        const voices = window.speechSynthesis.getVoices();
        const translate = wordPairs[currentPairIndex][l];
        const text = translate; // Текст, що потрібно озвучити
debugger
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text); // Створюємо об'єкт для озвучення
            utterance.lang = lang; // Встановлюємо мову
            const langVoice = voices.find(voice => voice.lang === lang);
            if (langVoice) {
                utterance.voice = langVoice;
            } else {
                console.warn('Голос для української мови не знайдено.');
            }
            utterance.onend = () => resolve(); // Виконання Promise після завершення озвучення
            utterance.onerror = (e) => reject(e); // Помилка озвучення
            window.speechSynthesis.speak(utterance); // Запускаємо озвучення
            setTextColor('ukrainian'); // Встановлюємо колір тексту
        } else {
            reject(new Error('Web Speech API не підтримується вашим браузером.'));
        }
    });
}


function nextPair(test = false, showUkr = false, size) {
    currentPairIndex++;
    test && currentPairIndex++;
    if (currentPairIndex >= wordPairs.length) {
        currentPairIndex = 0; // Повертаємось до початку, якщо досягли кінця списку
    }
    updateWords(showUkr, size);
    setTextColor('blue');
}

function setTextColor(language) {
    const englishWordElement = document.getElementById('englishWord');
    const ukrainianWordElement = document.getElementById('ukrainianWord');

    if (language === 'english') {
        englishWordElement.classList.add('red-text');
        englishWordElement.classList.remove('blue-text');
        ukrainianWordElement.classList.add('blue-text');
        ukrainianWordElement.classList.remove('red-text');
    } else if (language === 'ukrainian') {
        englishWordElement.classList.add('blue-text');
        englishWordElement.classList.remove('red-text');
        ukrainianWordElement.classList.add('red-text');
        ukrainianWordElement.classList.remove('blue-text');
    } else if (language === 'blue') {
        englishWordElement.classList.add('blue-text');
        englishWordElement.classList.remove('red-text');
        ukrainianWordElement.classList.add('blue-text');
        ukrainianWordElement.classList.remove('red-text');
    }
}

function updateWords(showUkr, size) {
    // if() {
    showUkrainianAfterDelay(showUkr);

    // }
    const englishWord = wordPairs[currentPairIndex].english;
    const ukrainianWord = wordPairs[currentPairIndex].ukrainian;
    const englishWordElement = document.getElementById('englishWord');
    const ukrainianWordElement = document.getElementById('ukrainianWord');

    englishWordElement.style.fontSize = size;
    ukrainianWordElement.style.fontSize = size;

    englishWordElement.textContent = englishWord;
    ukrainianWordElement.textContent = ukrainianWord;
}

function playAudio(filePath) {
    stopAudio(); // Зупиняємо поточне аудіо перед відтворенням нового
    currentAudio = new Audio(filePath);
    currentAudio.play();
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

// Початкове оновлення слів
updateWords(true, '10rem');

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'z':
        case 'я':
            speakEnglish();
            break;
        case 'x':
        case 'ч':
            speakUkrainian();
            break;
        case 'c':
        case 'с':
            nextPair();
            break;
        case 'v':
        case 'м':
            stopAudio();
            break;
    }
});

let autoPlayActive = false;

async function toggleAutoPlay() {
    autoPlayActive = !autoPlayActive;
    const button = document.querySelector('button[onclick="toggleAutoPlay()"]');
    button.textContent = autoPlayActive ? "Stop Auto Play" : "Auto Play";
    if (autoPlayActive) {
        await startRecording();
        await autoPlay();
        await stopRecording();
    } else {
        await stopRecording();  // Якщо автоплей зупинено вручну, завершуємо запис
    }
}

async function autoPlay() {
    let count = 0;
    while (autoPlayActive && count < 40) {
        await speakEnglish();
        await waitForAudio();
        await delay(1000);
        await speakUkrainian();
        // await waitForAudio();
        await delay(1000);
        await speakEnglish();
        await waitForAudio();
        await delay(1000);
        let size = '10rem'
        if (currentPairIndex % 2 !== 0) {
            size = '10rem'
        } else {
            size = '5rem'
        }
        nextPair(false, true, size);
        await delay(1000);
        count++;
    }

    await playAudio('myword.mp3');
    await delay(8000);

    count = 0;
    currentPairIndex = 0; // Починаємо з початку
    size = '10rem'
    while (autoPlayActive && count < 20) {

        showUkrainianAfterDelay(false);
        await speakEnglish(true);
        await waitForAudio();
        await delay(3000);
        showUkrainianAfterDelay(true);
        await speakUkrainian();
        // await waitForAudio();
        await delay(2000);
        await speakEnglish();
        await waitForAudio();
        await delay(3000);
        nextPair(true, false, size);
        await delay(1000);

        count++;
    }
    // while (autoPlayActive && count < 20) {

    //         showUkrainianAfterDelay(false);    
    //         await speakEnglish(true);
    //         await waitForAudio();
    //         await delay(1000);
    //         showUkrainianAfterDelay(true);
    //         await speakUkrainian();
    //         await waitForAudio();
    //         await delay(1000);
    //         await speakEnglish(); 
    //         await waitForAudio();
    //         await delay(1000);
    //         nextPair(true, false, size);
    //         await delay(1000);

    //     count++;
    // }

}

function showUkrainianAfterDelay(show) {
    debugger
    const ukrainianWordElement = document.getElementById('ukrainianWord');

    if (show) {

        ukrainianWordElement.style.visibility = 'visible';
    } else {
        ukrainianWordElement.style.visibility = 'hidden';
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForAudio() {
    return new Promise(resolve => {
        if (currentAudio) {
            currentAudio.onended = resolve;
        } else {
            resolve();
        }
    });
}

let mediaRecorder;
let recordedChunks = [];

async function startRecording() {
    try {
        // Захоплення екрану
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" },
            audio: true,
        });

        // Додаємо аудіо з медіаелементів браузера
        const audioContext = new AudioContext();
        const destination = audioContext.createMediaStreamDestination();

        // Усі звуки, які програються у браузері, повинні йти через ці елементи
        const audioElements = document.querySelectorAll("audio, video");
        if (audioElements.length === 0) {
            console.warn("Медіаелементи для захоплення звуку не знайдено.");
        }
        audioElements.forEach(audioElement => {
            const source = audioContext.createMediaElementSource(audioElement);
            source.connect(destination);
        });

        // Об'єднуємо відео з екрану та системне аудіо
        const combinedStream = new MediaStream([
            ...screenStream.getVideoTracks(),
            ...destination.stream.getAudioTracks()
        ]);
        console.log(combinedStream.getTracks());
        mediaRecorder = new MediaRecorder(combinedStream);

        recordedChunks = []; // Очищуємо записані дані
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        mediaRecorder.start();
        console.log("Запис екрана з системним звуком розпочато.");
    } catch (error) {
        console.error("Помилка під час спроби записати екран з системним звуком:", error);
    }
}


function stopRecording() {
    return new Promise((resolve) => {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
            mediaRecorder.onstop = () => {
                const blob = new Blob(recordedChunks, { type: "video/webm" });
                const url = URL.createObjectURL(blob);

                // Створюємо посилання для завантаження запису
                const downloadLink = document.createElement("a");
                downloadLink.href = url;
                downloadLink.download = "recording.webm";
                downloadLink.click();

                console.log("Запис завершено та збережено.");
                resolve();
            };

            mediaRecorder.stop();
        } else {
            console.warn("Запис ще не розпочато або вже завершено.");
            resolve();
        }
    });
}