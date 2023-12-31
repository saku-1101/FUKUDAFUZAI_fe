import Image from 'next/image'
// @ts-ignore
import QRCode from 'qrcode.react'
import React, { type Dispatch, type SetStateAction } from 'react'

import { Button } from '@/components/atoms/Button'
import { UserItem } from '@/components/atoms/UserItem/UserItem'

import type { User } from '@/types/User'

import { css } from '../../../../styled-system/css'

export type WaitCardProps = {
  setIsWaitingRoom: Dispatch<SetStateAction<boolean>>
  setUsers: Dispatch<SetStateAction<User[]>>
  users: User[]
  id: string | null
}

export const WaitCard = ({ ...props }: WaitCardProps) => {
  return (
    <div
      className={css({
        width: '100%',
        height: '100%',
        padding: '20px',
        color: 'black',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <p className={css({ fontSize: '20px', fontWeight: 'bold' })}>Waiting Room</p>
      <p className={css({ fontSize: '20px', marginTop: '14px' })}>
        {props.users.length} / 5
      </p>
      <div
        className={css({
          marginTop: '14px',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <div
          className={css({
            width: '50%',
            padding: '10px 20px',
            marginTop: '20px',
          })}
        >
          {props.id ? (
            <QRCode value={props.id} />
          ) : (
            <Image
              src='https://picsum.photos/seed/picsum/200/200'
              alt=''
              width={200}
              height={200}
            />
          )}
          <p
            className={css({
              fontSize: '14px',
              marginTop: '20px',
              textAlign: 'center',
            })}
          >
            このQRコードを<br></br>
            スマホで読み取ってください
          </p>
        </div>
        <div
          className={css({
            width: '50%',
            padding: '10px 20px',
            '& > *': {
              marginTop: '10px',
            },
          })}
        >
          {props.users.map((user) => (
            <UserItem
              key={user.id}
              label={`${user.id}P ${user.name}`}
              iconColor={user.iconColor}
            />
          ))}
        </div>
      </div>
      <div className={css({ marginTop: '20px' })}>
        <Button
          label='Start'
          primary={true}
          onClick={() => props.setIsWaitingRoom(false)}
        />
      </div>
    </div>
  )
}
