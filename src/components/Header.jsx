import bgLight from '../img/bg-light.jpg';
import bgDark from '../img/bg-dark.jpg';
import '../scss/header.scss';
import { useTask } from '../services/hooks'

export default function Header() {
  const [{isDark}, dispatch] = useTask();
  return (
    <header>
      <div className="header-bg" style={
        isDark === false ?
          {backgroundImage: `url(${bgLight})`} :
          {backgroundImage: `url(${bgDark})`}
      }></div>
    </header>
  )
}

