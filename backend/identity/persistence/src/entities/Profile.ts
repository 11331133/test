import { Column }                                from 'typeorm'

import { Profile as ProfileEntity, ProfileType } from '@identity/domain'

import { Address }                               from './Address'
import { ContactInformation }                    from './ContactInformation'
import { PersonalInformation }                   from './PersonalInformation'

export class Profile extends ProfileEntity {
  @Column('enum', {
    enum: ProfileType,
    nullable: true,
  })
  type: ProfileType

  @Column((type) => PersonalInformation)
  personalInformation: PersonalInformation

  @Column((type) => ContactInformation)
  contactInformation: ContactInformation

  @Column((type) => Address)
  address: Address

  @Column({ nullable: true })
  website: string
}
