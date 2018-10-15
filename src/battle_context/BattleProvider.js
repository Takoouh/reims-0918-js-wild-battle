import React, { Component } from "react";
import BattleContext from "./BattleContext";

const listHeroes = [
  30,
  69,
  165,
  207,
  213,
  222,
  226,
  263,
  310,
  313,
  322,
  341,
  346,
  354,
  361,
  386,
  485,
  514,
  620,
  644
];

class BattleProvider extends Component {
  state = {
    battle: {
      stats: ["Strength", "Speed", "Intelligence", "Durability"],
      heroes: [],
      randomHero: [],
      player_1: {
        nickname: "",
        nicknameChecked: false,
        deck: []
      },
      player_2: {
        nickname: "",
        nicknameChecked: false
      },
      round: {
        roundNumber: 1,
        roundStats: "",
        randomStat: "",
        currentPlayer: "Mathieu"
      }
    }
  };

  callApiSuperHeroes() {
    for (let i = 0; i < listHeroes.length; i++) {
      fetch(`http://superheroapi.com/api.php/2368931693133321/${listHeroes[i]}`)
        .then(results => results.json()) // conversion du résultat en JSON
        .then(data => {
          this.setState({
            battle: {
              ...this.state.battle,
              heroes: [...this.state.battle.heroes, data]
            }
          });
        });
    }
  }

  componentDidMount() {
    this.callApiSuperHeroes();
  }

  render() {
    return (
      <BattleContext.Provider
        value={{
          state: this.state,
          handleChangeNickname: (event, name) =>
            this.setState({
              battle: {
                ...this.state.battle,
                [name]: {
                  ...this.state.battle[name],
                  nickname: event.target.value.replace(/[ ]/, "")
                }
              }
            }),
          submitCheck: name => {
            this.setState({
              battle: {
                ...this.state.battle,
                [name]: {
                  ...this.state.battle[name],
                  nicknameChecked: true
                }
              }
            });
          },
          selectHero: id => {
            const deck = this.state.battle.player_1.deck.filter(
              hero => hero.id !== id
            );
            const randomHero = Math.floor(
              Math.random() * this.state.battle.heroes.length
            );
            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck,

                  selectedHero: this.state.battle.player_1.deck.filter(
                    hero => hero.id === id
                  )
                },
                randomHero: randomHero
              }
            });
          },

          getRandomInt: () => {
            const randomInt = Math.floor(
              Math.random() * Math.floor(this.state.battle.stats.length)
            );
            this.setState({
              battle: {
                ...this.state.battle,
                round: {
                  ...this.state.battle.round,
                  randomStat: randomInt
                }
              }
            });
          },
          getRandomDeck: () => {
            let oneCard = 0;
            const deck = [];
            for (let i = 5; i > 0; i--) {
              const randomN = Math.floor(
                Math.random() * this.state.battle.heroes.length
              );
              oneCard = this.state.battle.heroes[randomN];
              if (deck.indexOf(oneCard) === -1) {
                deck.push(oneCard);
              } else {
                i++;
              }
            }
            this.setState({
              battle: {
                ...this.state.battle,
                player_1: {
                  ...this.state.battle.player_1,
                  deck: deck
                }
              }
            });
          }
        }}
      >
        {this.props.children}
      </BattleContext.Provider>
    );
  }
}

export default BattleProvider;
