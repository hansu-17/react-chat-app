import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ButtonToolbar, Icon } from 'rsuite';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomIfoBtnModal from './RoomIfoBtnModal';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  const isMobile = useMediaQuery('(max-width: 992px)');

  return (
    <div>
      <div className="d-flex justify-cntent-between align-items-center">
        <h4 className="text-disappear d-flex align-items-center">
          <Icon
            componentClass={Link}
            to="/"
            icon="arrow-circle-left"
            size="2x"
            className={
              isMobile
                ? 'd-inline-bloc p-0 mr-2 text-blue link-unstled'
                : 'd-none'
            }
          />
          <span className="text-disappear">{name}</span>
        </h4>

        <ButtonToolbar className="ws-nowrap">todo</ButtonToolbar>
      </div>

      <div className="d-flex justify-cntent-between align-items-center">
        <span>todo</span>
        <RoomIfoBtnModal />
      </div>
    </div>
  );
};

export default memo(Top);
