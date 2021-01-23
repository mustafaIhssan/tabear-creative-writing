import { Link } from 'react-router-dom';
import { Button } from 'antd';
export function PromptsItem(item = {}) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
    return (<div>className) = "bg-pink-200 text-center p-5 m-2" >
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'ul'.
        <ul><li>Language;
    {
        (item as any).language;
    }
    <>/li>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'li'.
        < li;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'className'.
    className = "text-xl my-6" > { item, : .content } < /li>
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
        < div;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'className'.
    className = "space-x-2 m-5" >
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'i' implicitly has an 'any' type.
        { item, : .tags?.map((i) => (<span>className) = "p-2 bg-blue-200", key = { item, : .id + i } >
                // @ts-expect-error ts-migrate(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
                { i }
                < /span>) }
        < /div>
        < /ul>
        < Link;
    // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
    to = {} `/prompts/${(item as any).id}`;
}
 >
    // @ts-expect-error ts-migrate(2749) FIXME: 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
    <Button>View < /Button>
    < /Link>
    < /div>;
