import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { PressableFeedback } from '@/components/hero-ui';
import ThemeText from '@/components/ui/ThemeText';

// const PROFILE_FIELDS = [
//     user.name,
//     user.email,
//     user.phone,
//     user.department,
//     user.semester,
//     user.studentId,
//     user.emergencyContact,
// ];

// const missingFields =
//     PROFILE_FIELDS.filter(
//         field => !field
//     );

// const completion =
//     Math.round(
//         ((PROFILE_FIELDS.length -
//             missingFields.length) /
//             PROFILE_FIELDS.length) *
//         100
//     );


export const CampusAssistantCard = (

) => {
    return (
        <View
            className="overflow-hidden rounded-3xl border border-cyan-500/10 bg-cyan-500/3 p-4"
        >

            {/* Glow */}

            <View className=" absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10" />

            <View className="flex-row items-start">

                {/* Progress */}

                <View
                    className="h-14 w-14 items-center justify-center rounded-full border-2 border-cyan-500/20 bg-cyan-500/10"
                >
                    <ThemeText className="text-sm font-poppins-semibold text-cyan-400">
                        86%
                    </ThemeText>
                </View>

                {/* Content */}

                <View className="ml-4 flex-1">

                    <View className="flex-row items-center">

                        <MaterialIcons
                            name="smart-toy"
                            size={18}
                            color="#22D3EE"
                        />

                        <ThemeText className="ml-2 font-poppins-semibold text-white">
                            Campus Assistant
                        </ThemeText>

                    </View>

                    <ThemeText className="mt-2 text-zinc-400">
                        Your profile is almost complete.
                    </ThemeText>

                </View>

            </View>

            {/* Benefits */}

            <View className="mt-4 gap-2">

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="verified"
                        size={16}
                        color="#34D399"
                    />

                    <ThemeText className="ml-2 text-sm text-zinc-300">
                        Campus Verification
                    </ThemeText>

                </View>

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="work"
                        size={16}
                        color="#34D399"
                    />

                    <ThemeText className="ml-2 text-sm text-zinc-300">
                        Placement Access
                    </ThemeText>

                </View>

                <View className="flex-row items-center">

                    <MaterialIcons
                        name="school"
                        size={16}
                        color="#34D399"
                    />

                    <ThemeText className="ml-2 text-sm text-zinc-300">
                        Scholarship Forms
                    </ThemeText>

                </View>

            </View>

            {/* Missing Item */}

            <View
                className=" mt-4 rounded-2xl border border-amber-500/10 bg-amber-500/5 p-3"
            >
                <ThemeText className="text-xs text-zinc-500">
                    Missing
                </ThemeText>

                <ThemeText className="mt-1 text-amber-400">
                    Emergency Contact
                </ThemeText>

            </View>

            {/* {
                missingFields.length > 0 ? (
                    <View>
                        <ThemeText>
                            Missing
                        </ThemeText>

                        <ThemeText>
                            {missingFields[0]}
                        </ThemeText>
                    </View>
                ) : (
                    <View
                        className="
                mt-4
                rounded-2xl
                bg-emerald-500/10
                p-3
            "
                    >
                        <ThemeText
                            className="
                    text-emerald-400
                    font-poppins-medium
                "
                        >
                            🎉 Profile Complete
                        </ThemeText>
                    </View>
                );
            } */}

            <PressableFeedback
                className=" mt-4 h-12 flex-row items-center justify-center rounded-2xl bg-cyan-500"
            >
                <ThemeText className="font-poppins-semibold">
                    Complete Now
                </ThemeText>

                <MaterialIcons
                    name="arrow-forward"
                    size={18}
                    color="#fff"
                    style={{
                        marginLeft: 8,
                    }}
                />
            </PressableFeedback>

        </View>
    );
};