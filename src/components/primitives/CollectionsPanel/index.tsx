import Button from '../Button';
import { CollectionsPanelFrame } from './styled';
import { CollectionsPanelProps } from './types';

const CollectionsPanel: React.FC<CollectionsPanelProps> = ({
  children,
  name,
}) => {
  return (
    <CollectionsPanelFrame>
      <div className='CollectionsPanel-head'>
        <h2 className='CollectionsPanel-label'>{name}</h2>
        <Button variant='text' className='CollectionsPanel-showAllBtn'>
          Show all
        </Button>
      </div>
      <div className='CollectionsPanel-content'>{children}</div>
    </CollectionsPanelFrame>
  );
};

export default CollectionsPanel;
