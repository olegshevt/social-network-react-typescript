import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import Divider from '@material-ui/core/Divider/Divider';
import { Link } from 'react-router-dom';

interface TagsProps {
  _id: string;
  text: string;
  count: number;
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({
  _id,
  text,
  count,
  classes,
}: TagsProps): React.ReactElement | null => {
  return (
    <React.Fragment>
      <ListItem className={classes.rightSideBlockItem}>
        <ListItemText
          primary={text}
          secondary={
            <Typography component="span" variant="body2" color="textSecondary">
              Твитов: {count}
            </Typography>
          }
        />
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
};
