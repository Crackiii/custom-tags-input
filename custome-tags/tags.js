const colors = [
  {
    font: '#990f0f',
    background: '#ffbfbf'
  },
  {
    font: '#99630f',
    background: '#d6ffbf'
  },
  {
    font: '#6f7d4e',
    background: '#fff3bf'
  },
  {
    font: '#4e7d74',
    background: '#bff0ff'
  },
  {
    font: '#594e7d',
    background: '#c8bfff'
  },
  {
    font: '#7d4e76',
    background: '#ffbff0'
  }
]

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const removeTag = (event) => {
  if (event.target.classList.contains('tag-close')) {
    event.target.parentElement.remove();
  }
}

const addTag = (event) => {
  if (event.keyCode === 13) {
    const input = document.getElementById('input')
    const tagsContainer = document.querySelector('.tags-container');
    const color = getRandomColor();
    const value = event.target.value;
    const spanElement = document.createElement('span');

    spanElement.innerHTML = `
      <span class="tag-text">${value}</span>
      <span class="tag-close"> ⌫ </span>
    `
    spanElement.classList.add('tag');
    spanElement.style.backgroundColor = color.background;
    spanElement.style.color = color.font;

    tagsContainer.appendChild(spanElement);
    input.value = '';
  }
}



window.onload = () => {
  const tagsContainer = document.querySelector('.tags-container');
  tagsContainer.addEventListener('click', removeTag);
}