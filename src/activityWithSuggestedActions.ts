import { Activity, Message } from './directLine';

export function activityWithSuggestedActions(activities: Activity[]) {
    if (!activities || activities.length === 0) {
        return;
    }

    const lastActivity = activities[activities.length - 1];

    if (lastActivity.type === 'message'
        && lastActivity.suggestedActions
        && lastActivity.suggestedActions.actions.length > 0
    ) {
        return lastActivity;
    }
}
