import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { Button } from 'react-bootstrap';
import GnomeLaughing from '../../assets/audio/Gnome-Laughing.mp3'
import './ComingSoon.styles.scss'


const ComingSoon = () => {
  const [play] = useSound(GnomeLaughing);
    return (
      <div>

        <Button className="jumboButton" onClick={play}> Coming Soon! </Button>
      </div>
    )
}
export default ComingSoon;
