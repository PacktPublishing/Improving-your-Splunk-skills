#!/usr/bin/env python

import sys

from splunklib.searchcommands import \
    dispatch, StreamingCommand, Configuration, Option, validators

@Configuration()
class FixNameCommand(StreamingCommand):
    """ Takes the first letter of each word in the field and capitalizes it

    ##Syntax

    .. code-block::
        fixname fieldname=<field>

    ##Description

    Takes the first letter of each word in the field and capitalizes it

    ##Example

    Uppercase the first letter of each word in the message field in the _internal index

    .. code-block::
        index=_internal | head 20 | fixname fieldname=message

    """
    fieldname = Option(
        doc='''
        **Syntax:** **fieldname=***<fieldname>*
        **Description:** Name of the field that will be capitalized''',
        require=True, validate=validators.Fieldname())

    def stream(self, records):
        self.logger.debug('FixNameCommand: %s' % self)  # logs command line
        for record in records:
            record[self.fieldname] = record[self.fieldname].title()
            yield record

dispatch(FixNameCommand, sys.argv, sys.stdin, sys.stdout, __name__)

