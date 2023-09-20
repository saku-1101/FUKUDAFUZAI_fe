import React from 'react'

import { Attacker } from '@/components/atoms/Attacker'
import type { AttackerParam } from '@/components/atoms/Attacker/Attacker'

export type AttackersProps = {
  attackerParams: Array<AttackerParam>
}

export const Attackers = ({ ...props }: AttackersProps) => {
  // const [attackers, setUsers] = useState(props.attackerParams)

  console.log('Attackers')

  const MemoAttacker = React.memo(Attacker)
  return (
    <>
      {props.attackerParams.map((attacker, key) => (
        <MemoAttacker
          key={key}
          color={attacker.color}
          // color={'#89d3f0'}
          position={attacker.position}
          scoreSender={attacker.scoreSender}
        />
      ))}
    </>
  )
}