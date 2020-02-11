const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = parseInt(movieSelect.value)

// Updated total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  // of the selected seats, find me its index inside the total seat
  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length

  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = parseInt(e.target.value)
  updateSelectedCount()
})

// Seat click event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')

    updateSelectedCount()
  }
})
