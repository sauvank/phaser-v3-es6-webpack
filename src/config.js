import Phaser from 'phaser'
import IsoPlugin from 'phaser3-plugin-isometric'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'phaseres6webpack',
  plugins: {
    global: [{ key: 'iso', plugin: IsoPlugin }]
  }
}
