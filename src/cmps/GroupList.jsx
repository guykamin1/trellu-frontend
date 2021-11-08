import {GroupPreview} from './GroupPreview'
export const GroupList = ({groups}) => {
    return <section className="group-list">
        {
            groups.map(group => <GroupPreview group={group} key={group.id}/>)
        }
    </section>
}