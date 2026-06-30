import React, { Fragment } from 'react'
import { DisableTwoFactorCard } from './disableTwoFactorCard'
import { RecoveryMethodsCard } from './recoveryMethodsCard'
import { TwoFactorDetailsCard } from './twoFactorDetailsCard'
import { TwoFactorHero } from './twoFactorHero'

const isEnabled = true;

export const TowFactorComponentController = () => {
    return (
        <Fragment>
            <TwoFactorHero enabled={isEnabled} />
            {isEnabled && (
                <Fragment>
                    <TwoFactorDetailsCard />
                    <RecoveryMethodsCard />
                    <DisableTwoFactorCard />
                </Fragment>
            )}
        </Fragment>
    )
}
