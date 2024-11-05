const startButton = document.getElementById('start-button');
const restartBtn = document.getElementById('restart');
const homeButton = document.getElementById('home');
const inputs = document.querySelectorAll('.input');
const rightWordsCount = document.querySelector('.right-counts');
const wrongWordsCount = document.querySelector('.wrong-counts');
const gameWindow = document.querySelector('.main');
const authorButton = document.getElementById('author-button');
const descriptionButton = document.querySelector('.description-button');
const showCertificateBtn = document.getElementById('showCertificateBtn');
const certificateModal = document.getElementById('certificateModal');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
const closeBtn2 = document.querySelector('.close-btn2');
const modalText = document.querySelector('.modal-text');
let wrongWordCount = 0;
let rightWordCount = 0;
let isGameOver = false;

//Word Array
const easyWordArray = [
  'apple',
  'book',
  'cat',
  'dog',
  'egg',
  'fish',
  'go',
  'hat',
  'ice',
  'jump',
  'kite',
  'leaf',
  'man',
  'net',
  'owl',
  'pig',
  'queen',
  'run',
  'sun',
  'toy',
  'up',
  'van',
  'win',
  'yes',
  'zoo',
  'ant',
  'bee',
  'cup',
  'door',
  'ear',
  'fox',
  'gum',
  'hen',
  'ink',
  'jam',
  'key',
  'log',
  'moon',
  'nose',
  'pen',
  'rat',
  'sock',
  'tree',
  'umbrella',
  'vest',
  'water',
  'x-ray',
  'yarn',
  'zero',
  'arm',
  'bed',
  'cow',
  'duck',
  'eye',
  'fan',
  'gift',
  'hill',
  'island',
  'joke',
  'king',
  'lion',
  'mouse',
  'neck',
  'orange',
  'pool',
  'quiz',
  'metamorphosis',
  'star',
  'tent',
  'uncle',
  'vase',
  'wall',
  'box',
  'year',
  'zebra',
  'ball',
  'car',
  'dice',
  'elephant',
  'frog',
  'girl',
  'house',
  'igloo',
  'juice',
  'knife',
  'lamp',
  'milk',
  'nut',
  'ox',
  'pencil',
  'rose',
  'ship',
  'table',
  'umbrella',
  'violet',
  'wolf',
  'xylophone',
  'yard',
  'zipper',
  'acorn',
  'banana',
  'cloud',
  'drum',
  'engine',
  'flower',
  'goose',
  'hand',
  'iron',
  'jelly',
  'kite',
  'lake',
  'moon',
  'nest',
  'octopus',
  'parrot',
  'quiet',
  'rain',
  'shoe',
  'turtle',
  'unicorn',
  'violin',
  'window',
  'xenon',
  'yo-yo',
  'zinc',
  'alligator',
  'bat',
  'chair',
  'doll',
];
const medWordArray = [
  'ability',
  'absence',
  'academy',
  'account',
  'accumulate',
  'achieve',
  'activity',
  'adapt',
  'addition',
  'adventure',
  'advocate',
  'agency',
  'agriculture',
  'alcohol',
  'analysis',
  'annual',
  'anxiety',
  'appeal',
  'approach',
  'argument',
  'article',
  'aspect',
  'attempt',
  'attract',
  'balance',
  'benefit',
  'biology',
  'caution',
  'challenge',
  'climate',
  'collection',
  'combine',
  'community',
  'competition',
  'computer',
  'condition',
  'conflict',
  'consequence',
  'constant',
  'content',
  'contrast',
  'contribute',
  'courage',
  'creative',
  'criminal',
  'currency',
  'current',
  'debate',
  'decision',
  'define',
  'demonstrate',
  'depend',
  'development',
  'discovery',
  'distance',
  'distribution',
  'education',
  'element',
  'emergency',
  'emotion',
  'employee',
  'environment',
  'establish',
  'evidence',
  'evaluate',
  'evolution',
  'experience',
  'expertise',
  'external',
  'feature',
  'finance',
  'freedom',
  'function',
  'gender',
  'government',
  'graduate',
  'guideline',
  'habitat',
  'hospital',
  'identity',
  'impact',
  'importance',
  'influence',
  'initiative',
  'inspiration',
  'interaction',
  'interest',
  'investigate',
  'isolation',
  'justice',
  'knowledge',
  'language',
  'lecture',
  'location',
  'magnitude',
  'maintenance',
  'manager',
  'material',
  'mechanism',
  'memory',
  'method',
  'migration',
  'mission',
  'monitor',
  'motivation',
  'movement',
  'observation',
  'operation',
  'opinion',
  'participate',
  'pattern',
  'performance',
  'perspective',
  'positive',
  'position',
  'potential',
  'presentation',
  'pressure',
  'process',
  'produce',
  'progress',
  'protection',
  'reaction',
  'recovery',
  'relationship',
  'relevant',
  'reputation',
  'research',
  'response',
  'result',
  'revenue',
  'revolution',
  'schedule',
  'section',
  'significant',
  'similarity',
  'solution',
  'source',
  'strategy',
  'structure',
  'student',
  'success',
  'suggestion',
  'symbol',
  'technique',
  'technology',
  'theory',
  'treatment',
  'understanding',
  'university',
  'variety',
  'version',
  'vibration',
  'volunteer',
  'weather',
  'website',
  'witness',
  'workshop',
  'writing',
  'youth',
  'zenith',
  'abandon',
  'academy',
  'analyze',
  'calculate',
  'conclude',
  'contrast',
  'evaluate',
  'influence',
  'interpret',
  'modify',
  'promote',
  'simulate',
  'validate',
  'estimate',
  'coordinate',
  'integrate',
  'persuade',
  'distribute',
];
const hardWordArray = [
  'aberration',
  'abstruse',
  'acquiesce',
  'adulation',
  'alacrity',
  'allegory',
  'ameliorate',
  'anachronism',
  'anomaly',
  'antithesis',
  'apathy',
  'apprehensive',
  'archetype',
  'articulate',
  'astute',
  'augmented',
  'belligerent',
  'benevolent',
  'cacophony',
  'camaraderie',
  'candid',
  'capitulate',
  'catalyst',
  'cognizant',
  'conflagration',
  'conjecture',
  'conundrum',
  'corroborate',
  'debilitate',
  'deference',
  'definitive',
  'deluge',
  'dichotomy',
  'diligent',
  'disparate',
  'disseminate',
  'dissonance',
  'ebullient',
  'effervescent',
  'egregious',
  'elucidate',
  'emulate',
  'ephemeral',
  'equanimity',
  'esoteric',
  'exacerbate',
  'exemplary',
  'fallacious',
  'fastidious',
  'flabbergasted',
  'fluctuate',
  'foreshadow',
  'fortuitous',
  'fugacious',
  'garrulous',
  'genuine',
  'grandiose',
  'grievous',
  'hedonistic',
  'hypothetical',
  'iconoclast',
  'impetuous',
  'impugn',
  'incorrigible',
  'indelible',
  'ineffable',
  'inscrutable',
  'insidious',
  'integrity',
  'intermittent',
  'juxtapose',
  'kaleidoscope',
  'lackadaisical',
  'lassitude',
  'loquacious',
  'malediction',
  'melancholy',
  'metamorphosis',
  'misanthrope',
  'mitigate',
  'nefarious',
  'obfuscate',
  'oblivion',
  'omnipotent',
  'paradox',
  'paragon',
  'perfunctory',
  'perseverance',
  'perspicacious',
  'philanthropy',
  'platitude',
  'precarious',
  'proclivity',
  'quintessential',
  'quizzical',
  'rancorous',
  'recalcitrant',
  'reclusive',
  'rejuvenate',
  'resilient',
  'reticent',
  'sanguine',
  'scrutinize',
  'serendipity',
  'spontaneity',
  'superfluous',
  'synergy',
  'temerity',
  'tenacity',
  'transcend',
  'ubiquitous',
  'unctuous',
  'venerable',
  'veracity',
  'vicarious',
  'vociferous',
  'volition',
  'winnow',
  'zenith',
  'abstruse',
  'acumen',
  'admonish',
  'adversarial',
  'aesthetic',
  'alienate',
  'altruistic',
  'apprehend',
  'artifice',
  'ascertain',
  'atrocity',
  'boisterous',
  'callous',
  'capricious',
  'censure',
  'circumspect',
  'clandestine',
  'complicit',
  'concatenate',
  'consolidate',
  'construe',
  'curmudgeon',
  'dichotomous',
  'dissonant',
  'enervate',
  'epiphany',
  'exculpate',
  'fatuous',
  'finesse',
  'fortitude',
  'garrulous',
  'hegemony',
  'holistic',
  'impasse',
  'inexorable',
  'juxtaposition',
  'maverick',
  'neologism',
  'nuance',
  'occlude',
  'omnipresent',
  'parody',
  'pecuniary',
  'phlegmatic',
  'pragmatic',
  'prolific',
  'quagmire',
  'rhetoric',
  'sagacious',
  'salient',
  'sanctimonious',
  'satiate',
  'sophistry',
  'substantiate',
  'surreptitious',
  'sycophant',
  'tenable',
  'ubiquity',
  'vapid',
  'vicissitude',
  'zealous',
];

const currentArray = [easyWordArray, medWordArray, hardWordArray];
let currentWords = [];
let fallingWords = [];
let typedWord = '';
let gameInterval = null;

const emptyTypedWord = () => (typedWord = '');

// Return to the Main Page
if (homeButton) {
  homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
}

// Функция для стилизации инпутов
function inputsStyles() {
  inputs.forEach((item) => {
    item.checked = false;
    item.style.display = 'initial';
    item.style.fontSize = '2rem';
  });
}
inputsStyles();

// Description listener
if (descriptionButton) {
  const list = document.querySelector('.list'); // Получаем элемент с классом .list
  if (list) {
    descriptionButton.addEventListener('click', () => {
      if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
      } else {
        list.style.display = 'none';
      }
    });
  }
}

// Функция для изменения чекбоксов
function changeCheckBox(event) {
  inputs.forEach((input) => {
    if (input.id !== event.target.id) {
      input.style.display = 'none';
    } else {
      input.style.fontSize = '1.7rem';
    }
    input.checked = false; // Сбрасываем выбор
  });
  event.target.checked = true; // Активируем выбранный уровень
  currentWords = [...currentArray[event.target.value]];
}

function showModal(text, right, wrong) {
  if (right && wrong) {
    modalText.innerHTML = `
    <h1>${text}</h1>
    <h1>Right Words: <span class="right">${rightWordCount}</span></h1>
    <h1>Wrong Words: <span class="wrong">${wrongWordCount}</span></h1>`;
  } else {
    modalText.textContent = text;
  }

  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}

if (closeBtn2) {
  closeBtn2.addEventListener('click', hideModal);
}

// Run Game
if (startButton) {
  startButton.addEventListener('click', () => {
    rightWordChange();
    wrongWordChange();
    if (authorButton) authorButton.style.display = 'none';
    if (currentWords.length === 0) {
      showModal('Select Level');
    } else {
      startButton.style.display = 'none';
      restartBtn.style.position = 'fixed';
      restartBtn.style.left = '30px';
      restartBtn.style.top = '12px';
      startGame();
    }
    if (currentWords.length !== 0) {
      inputs.forEach((item) => {
        item.style.display = 'none';
      });
    }
  });
}

// Функция для создания падающего слова
const createFallingWord = (word) => {
  const wordDiv = document.createElement('div');
  wordDiv.classList.add('falling-word');
  wordDiv.textContent = word;
  wordDiv.style.color = 'white';
  wordDiv.style.fontSize = '2.5rem';
  wordDiv.style.left = `${randomNumber(0, gameWindow.clientWidth - 100)}px`;
  gameWindow.appendChild(wordDiv);
  fallingWords.push(wordDiv);
  wordDiv.timeout = setTimeout(() => {
    wrongWordCount++; // Увеличиваем счетчик ошибок
    wrongWordChange(true);
    if (wrongWordCount === 10) {
      defeatFunction();
      defeatSound(true);
      restart();
    }
  }, 7000);

  animateFallingWord(wordDiv);
};

// Animate Falling Words
const animateFallingWord = (wordDiv) => {
  let position = 0;
  const fallSpeed = 2;
  const fallingInterval = setInterval(() => {
    if (position < gameWindow.clientHeight - 100) {
      position += fallSpeed;
      wordDiv.style.top = `${position}px`;
    } else {
      clearInterval(fallingInterval);
      wordDiv.remove();
    }
  }, 20);
};

// Starting Game
const startGame = () => {
  document.addEventListener('keydown', (event) => {
    if (/^[a-zA-Z]$/.test(event.key)) {
      // Проверка, что нажатая клавиша — это буква
      playKeyboardSound();
    }
  });
  fallingWords = [];

  // new
  gameInterval = setInterval(() => {
    if (rightWordCount !== 35) {
      createFallingWord(currentWords[randomNumber(0, currentWords.length - 1)]);
    } else {
      clearInterval(gameInterval);
      winFunction();
    }
  }, 2000);
};

// Check Current Word
const checkTypedWord = () => {
  let foundWord = false;
  fallingWords.forEach((wordDiv, index) => {
    const wordText = wordDiv.textContent;
    const typedText = typedWord.trim();

    if (wordText.startsWith(typedText)) {
      // Обновляем отображение текста, выделяя совпавшие буквы красным
      const highlightedText = `<span style="color: red;">${typedText}</span>${wordText.slice(
        typedText.length
      )}`;
      wordDiv.innerHTML = highlightedText;

      if (typedText === wordText) {
        // Если слово полностью набрано, удаляем его
        clearTimeout(wordDiv.timeout);
        wordDiv.remove();
        rightWordCount++;
        rightWordChange(true);
        fallingWords.splice(index, 1);
        emptyTypedWord();
        foundWord = true;
      }
    }
  });

  if (!foundWord && typedWord.length > 0) {
    const matchedWords = fallingWords.filter((wordDiv) =>
      wordDiv.textContent.startsWith(typedWord.trim())
    );
    if (matchedWords.length === 0) emptyTypedWord(); // Сброс, если слово не найдено
  }
};

// Keyboard listener
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') emptyTypedWord();
  else {
    typedWord += event.key;
    checkTypedWord();
  }
});

// Restart Game
function restart() {
  rightWordCount = 0;
  wrongWordCount = 0;
  inputsStyles();
  if (authorButton) authorButton.style.display = 'initial';
  fallingWords.forEach((word) => word.remove());
  fallingWords = [];
  currentWords = [];
  emptyTypedWord();
  startButton.style.display = 'initial';
  // restartBtn.style.display = 'initial'
  restartBtn.style.left = '680px';
  restartBtn.style.top = '220px';
  clearInterval(gameInterval);
  rightWordChange();
  wrongWordChange();
}

// Слушатели событий для чекбоксов
inputs.forEach((item) => {
  item.addEventListener('change', changeCheckBox);
});
if (restartBtn) {
  restartBtn.addEventListener('click', restart);
}

// Generate Random Number
function randomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Обработчик для кнопки "Автор"
if (authorButton) {
  authorButton.addEventListener('click', () => {
    window.location.href = 'second-html-page.html';
  });
}

// Обработчик для модального окна сертификата
if (showCertificateBtn && certificateModal && closeBtn) {
  showCertificateBtn.addEventListener('click', () => {
    certificateModal.style.display = 'flex'; // Показать сертификат
  });
  closeBtn.addEventListener('click', () => {
    certificateModal.style.display = 'none'; // Скрыть сертификат
  });
}

// Закрытие модального окна при клике вне изображения
if (certificateModal) {
  certificateModal.addEventListener('click', (event) => {
    if (event.target === certificateModal) {
      certificateModal.style.display = 'none';
    }
  });
}

// Defeat
function defeatFunction() {
  isGameOver = true;
  showModal('You Lost', true, true);
  defeatSound();
  clearInterval(gameInterval);
  // Очищаем все анимации падающих слов и удаляем их с экрана
  fallingWords.forEach((wordDiv) => {
    clearTimeout(wordDiv.timeout);
    wordDiv.remove();
  });
  fallingWords = [];
  // Очищаем все анимации падающих слов и удаляем их с экрана
  setTimeout(() => {
    rightWordChange();
    wrongWordChange();
  }, 6500);
}

//Win
function winFunction() {
  if (rightWordCount === 35) {
    showModal('You Win', true, true);
    winSound();
  }

  setTimeout(() => {
    rightWordChange();
    wrongWordChange();
  }, 1000);
}

function rightWordChange(prop) {
  if (prop) {
    rightSound();
    rightWordsCount.textContent = +rightWordsCount.textContent + 1;
  } else {
    rightWordsCount.textContent = '0';
  }
}
5;
function wrongWordChange(prop) {
  if (prop) {
    wrongSound();
    wrongWordsCount.textContent = +wrongWordsCount.textContent + 1;
  } else {
    wrongWordsCount.textContent = '0';
  }
}

function playKeyboardSound() {
  const audio = document.getElementById('keyboard');
  audio.play();
}

function rightSound() {
  const rightSoundEl = document.getElementById('right');
  rightSoundEl.play();
}
function wrongSound() {
  const wrongSoundEl = document.getElementById('wrong');
  wrongSoundEl.play();
}
function defeatSound() {
  const defeatAudio = document.getElementById('fiasco');
  defeatAudio.play();
}
function winSound() {
  const winSound = document.getElementById('win');
  winSound.play();
}
