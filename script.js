// ---------- Content for the crest and the eight essentials ----------
// Edit the text below to change what appears in the pop-up windows.

const crestIconSVG = `<svg viewBox="0 0 100 100" aria-hidden="true">
  <g stroke="#EFBF4C" stroke-width="3.2" stroke-linecap="round" fill="none">
    <line x1="50" y1="9" x2="50" y2="1"></line>
    <line x1="67" y1="14" x2="72.5" y2="7"></line>
    <line x1="33" y1="14" x2="27.5" y2="7"></line>
    <line x1="79" y1="26" x2="86" y2="20"></line>
    <line x1="21" y1="26" x2="14" y2="20"></line>
  </g>
  <g fill="#EFBF4C">
    <rect x="46" y="31" width="8" height="46" rx="2"></rect>
    <rect x="32" y="47" width="36" height="8" rx="2"></rect>
  </g>
</svg>`;

const content = {
  crest: {
    title: "Who Was Blessed Edmund Rice?",
    icon: crestIconSVG,
    body: [
      "Blessed Edmund Rice was born on the 1st of June 1762 in Kilkenny, Ireland. He was a very successful businessman who had a lot of money. He decided he wanted to use it to help poor children. After his wife died, he decided to spend the rest of his life helping children who could not afford to go to school. He believed that every child should have the chance to learn, believe in God and have a good future.",
      "Edmund Rice used a lot of his money to build schools where boys could learn to read, write and understand the Catholic faith. He was kind to every child and treated every child with a lot of respect. All of his work led to the start of the Christian Brothers, who went on to open schools in lots of countries.",
      "Even though he died in 1844, his ideas are still followed today in schools like St Ambrose. In 1996, Pope John Paul II made him Blessed Edmund Rice, because he had lived a good and holy life and helped so many people."
    ]
  },
  e1: {
    title: "Evangelising the Modern World",
    icon: '<img src="assets/icon-1-evangelising.png" alt="">',
    body: [
      "Edmund Rice didn't just talk about his faith, he lived it out loud. He used his own money and time to show God's love to children that nobody else was looking after. He believed faith wasn't something to keep quiet about, it was something to share through kindness and action. At St Ambrose, we try to do the same today, letting our faith show in how we treat people, not just in what we say."
    ]
  },
  e2: {
    title: "Promoting the Spiritual",
    icon: '<img src="assets/icon-2-promoting-spiritual.png" alt="">',
    body: [
      "Even as a busy businessman, Edmund Rice made time for prayer and quiet reflection. He believed a good life needed more than money or success, it needed a strong relationship with God. When he opened his schools, he made sure faith and prayer were part of everyday life, not just Sunday mornings. St Ambrose keeps that same spirit alive, giving pupils space to pause, reflect and grow closer to God."
    ]
  },
  e3: {
    title: "Building a Christian Community",
    icon: '<img src="assets/icon-3-christian-community.png" alt="">',
    body: [
      "After his wife died, Edmund Rice could have shut himself away. Instead, he gathered other men who shared his vision and started the Christian Brothers together. He knew that one person can only do so much, but a community working as one can change lives. That small group grew into schools all over the world. St Ambrose is still part of that same community today, built on faith, friendship and working together."
    ]
  },
  e4: {
    title: "Compassion for Those in Need",
    icon: '<img src="assets/icon-4-compassion.png" alt="">',
    body: [
      "Edmund Rice saw children on the streets of Kilkenny with no school, no shoes and no hope of a better life, and it broke his heart. He didn't just feel sorry for them, he acted, spending his own fortune to open schools where they were welcome. He treated every child with kindness and respect, no matter how poor they were. St Ambrose asks us to notice when someone needs help, and to actually do something about it too."
    ]
  },
  e5: {
    title: "Concern for the Whole Person",
    icon: '<img src="assets/icon-5-whole-person.png" alt="">',
    body: [
      "Edmund Rice cared about more than just his pupils' reading and writing. He wanted every child to feel valued, safe and loved, not just clever. He treated each boy as a whole person, with feelings, struggles and dreams of his own. That's why St Ambrose looks after pupils' wellbeing and character, not only their grades, because every person matters completely, not just the parts that show up on a report card."
    ]
  },
  e6: {
    title: "Striving for Excellence",
    icon: '<img src="assets/icon-6-excellence.png" alt="">',
    body: [
      "Edmund Rice never did things by half measures. He worked tirelessly to give poor children the same quality of education that wealthy children received, refusing to believe they deserved any less. He pushed his schools to be genuinely excellent, not just adequate, because he believed his pupils were worth the effort. That same drive lives on at St Ambrose today, where pupils are encouraged to aim high and give their very best."
    ]
  },
  e7: {
    title: "Education as a Christian Calling",
    icon: '<img src="assets/icon-7-christian-calling.png" alt="">',
    body: [
      "For Edmund Rice, teaching was never just a job, he believed God had called him to do it. He wanted his schools to help pupils grow closer to God as well as learn their lessons. Faith and learning went hand in hand in everything he built, each one strengthening the other. At St Ambrose, education is still seen as something sacred, a calling to help each pupil grow in both knowledge and faith."
    ]
  },
  e8: {
    title: "Education for Justice",
    icon: '<img src="assets/icon-8-justice.png" alt="">',
    body: [
      "Edmund Rice saw that poor children were shut out of school simply because their families had no money, and he believed that was deeply unfair. He believed education could break that cycle and give every child a fair chance in life, whatever their background. By opening free schools, he gave hope to children the world had overlooked. St Ambrose carries that same mission of justice through education today."
    ]
  }
};

// ---------- Modal wiring ----------
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalIcon = document.getElementById('modal-icon');
const closeBtn = document.getElementById('modal-close');
let lastFocused = null;

function openModal(key){
  const entry = content[key];
  if (!entry) return;
  modalTitle.textContent = entry.title;
  modalIcon.innerHTML = entry.icon;
  modalBody.innerHTML = entry.body.map(p => `<p>${p}</p>`).join('');
  lastFocused = document.activeElement;
  modal.showModal();
  closeBtn.focus();
}

function closeModal(){
  modal.close();
}

document.querySelectorAll('[data-key]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.key));
});

closeBtn.addEventListener('click', closeModal);

// Close when the backdrop (not the card itself) is clicked
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

// Native <dialog> already closes on Escape; keep state tidy afterwards too
modal.addEventListener('close', () => {
  if (lastFocused) lastFocused.focus();
});
