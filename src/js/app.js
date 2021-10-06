import Welcome from '../assets/images/welcome.png';

export default function App() {
  const root = document.getElementById('root');
  const welcomeImage = new Image();
  const h1 = document.createElement('h1');

  welcomeImage.src = Welcome;
  welcomeImage.height = 200;
  h1.innerText = 'Hello!';

  root.appendChild(h1);
  root.appendChild(welcomeImage);

  return root;
}
