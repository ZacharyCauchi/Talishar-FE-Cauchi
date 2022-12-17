import React from 'react';
import { RootState } from '../../../app/Store';
import { BiRefresh, BiBullseye, BiShield } from 'react-icons/bi';
import { HiBolt } from 'react-icons/hi2';
import { GiZigzagLeaf } from 'react-icons/gi';
import styles from './CurrentAttack.module.css';
import attackSymbol from '../../../img/symbols/symbol-attack.png';
import defSymbol from '../../../img/symbols/symbol-defence.png';
import CardDisplay from '../cardDisplay/CardDisplay';
import { useAppSelector } from '../../../app/Hooks';

export default function CurrentAttack() {
  const activeCombatChain = useAppSelector(
    (state: RootState) => state.game.activeChainLink
  );
  if (
    activeCombatChain === undefined ||
    activeCombatChain.attackingCard === undefined ||
    activeCombatChain.attackingCard.cardNumber === 'blank'
  ) {
    return <div className={styles.currentAttack} />;
  }

  const attackValue = activeCombatChain.totalAttack;
  const defValue = activeCombatChain.totalDefence;
  const attCard = activeCombatChain.attackingCard;

  return (
    <div className={styles.currentAttack}>
      <div className={styles.attDefRow}>
        <div className={styles.attDiv}>{attackValue}</div>
        <div className={styles.attackSymbol}>
          <img
            className={styles.chainSymbols}
            src={attackSymbol}
            alt="attack symbol"
          />
        </div>
        <div className={styles.attackSymbol}>
          <img
            className={styles.chainSymbols}
            src={defSymbol}
            alt="defence symbol"
          />
        </div>
        <div className={styles.defDiv}>{defValue}</div>
      </div>
      <div className={styles.attack}>
        <CardDisplay card={attCard} makeMeBigger={true} />
        <div className={styles.floatCover}>
          {activeCombatChain.goAgain ? (
            <div className={styles.icon}>
              <BiRefresh title="Go Again" />
            </div>
          ) : null}
          {activeCombatChain.dominate ? (
            <div className={styles.icon}>
              <BiBullseye title="Dominate" />
            </div>
          ) : null}
          {activeCombatChain.overpower ? (
            <div className={styles.icon}>
              <HiBolt title="Overpower" />
            </div>
          ) : null}
          {activeCombatChain.fused ? (
            <div className={styles.icon}>
              <GiZigzagLeaf title="Fused" />
            </div>
          ) : null}
          {activeCombatChain.damagePrevention ? (
            <div className={styles.icon}>
              <BiShield title="Damage Prevention" />
              {activeCombatChain.damagePrevention}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
