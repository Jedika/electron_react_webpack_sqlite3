import React from 'react';
import { ipcRenderer } from 'electron';
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const styles = {
  main: {
    textAlign: "center",
    marginTop: 100,
  },
  logo: {
    src: "./assets/app.png"
  },
  electron: {
    color: "#3a585f",
  },
  react: {
    color: "#61dafb",
  },
  webpack: {
    color: "#53b7e6",
  },
  babel: {
    color: "#f5da55",
  },
  version: {
    fontSize: 12,
    color: "gray",
  },
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    this.setState({ loading: false })

    var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('startdb.sqlite');
 
db.serialize(function() {
  db.each("SELECT id FROM produit", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
 
db.close();
  }

  _handleClick = () => {
    var res = ipcRenderer.sendSync('get-result', { name: 'react' })
    alert(res);
  }

  render() {
    return (
      <div style={styles.main}>
        <img src={styles.logo.src} alt="" />
        <h2>
          <span style={styles.electron}>Electron</span>,
          <span style={styles.react}> React</span>,
          <span style={styles.webpack}> Webpack</span>,
          <span style={styles.babel}> Babel</span></h2>
          <p style={styles.version}>v1.0.0</p>
      </div>
    );
  }
}

export default Home;