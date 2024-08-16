let bank = 100

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]

function draftPlayers() {
  players.forEach(player => {
    const randomTeamNumber = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamNumber
  })
  drawTeamOne()
  drawTeamTwo()
}
function drawTeamOne() {
  let teamOneEmojis = ''
  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  teamOnePlayers.forEach(player => teamOneEmojis += player.emoji)
  const teamOneElement = document.getElementById('teamOneRoster')
  teamOneElement.innerText = teamOneEmojis
}
function drawTeamTwo() {
  let teamTwoEmojis = ''
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)
  teamTwoPlayers.forEach(player => teamTwoEmojis += player.emoji)
  const teamTwoElement = document.getElementById('teamTwoRoster')
  teamTwoElement.innerText = teamTwoEmojis
}

function drawBank() {
  const bankElem = document.getElementById('bank')
  bankElem.innerText = `$${bank}`
}

function betTeamOne(betAmount) {
  if (betAmount > bank) {
    window.alert(`You do not have the funds to bet $${betAmount}`)
    return
  }

  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

  let teamOneTotalSkill = 0
  let teamTwoTotalSkill = 0

  teamOnePlayers.forEach(player => teamOneTotalSkill += player.skill)
  teamTwoPlayers.forEach(player => teamTwoTotalSkill += player.skill)

  if (teamOneTotalSkill > teamTwoTotalSkill) {
    bank += betAmount
  }
  else if (teamTwoTotalSkill > teamOneTotalSkill) {
    bank -= betAmount
  }

  draftPlayers()
  drawBank()
}

function betTeamTwo(betAmount) {
  if (betAmount > bank) {
    window.alert(`You do not have the funds to bet $${betAmount}`)
    return
  }

  const teamOnePlayers = players.filter(player => player.teamNumber == 1)
  const teamTwoPlayers = players.filter(player => player.teamNumber == 2)

  let teamOneTotalSkill = 0
  let teamTwoTotalSkill = 0

  teamOnePlayers.forEach(player => teamOneTotalSkill += player.skill)
  teamTwoPlayers.forEach(player => teamTwoTotalSkill += player.skill)

  if (teamOneTotalSkill > teamTwoTotalSkill) {
    bank -= betAmount
  }
  else if (teamTwoTotalSkill > teamOneTotalSkill) {
    bank += betAmount
  }

  draftPlayers()
  drawBank()
}



drawBank()
draftPlayers()